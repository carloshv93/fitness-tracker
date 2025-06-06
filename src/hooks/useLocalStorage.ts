import {useState, useEffect} from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    })

    const addStoredValue = (value: T) => {
        setStoredValue(value)
    }
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue))
    }, [key, storedValue])

    return [storedValue, setStoredValue, addStoredValue] as const
}
