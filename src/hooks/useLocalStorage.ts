interface LocalStorageState {
    key: string,
    action: 'set' | 'get',
    item?: string
}

const reducer = ({ key, action, item }: LocalStorageState) => {
    switch (action) {
        case 'set':
            localStorage.setItem(key, item || '');
            return null;
        case 'get':
            return localStorage.getItem(key) ? localStorage.getItem(key) : null;
    }
}

export const useLocalStorage = ({ key, action, item }: LocalStorageState) => {
    console.log(reducer({ key, action, item }))
    return reducer({ key, item, action });
}