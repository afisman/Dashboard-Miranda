import { useEffect, useState } from "react";


export default function useStoreSidebar(key: string, initialValue: string) {
    const [value, setValue] = useState<string>(() => {
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