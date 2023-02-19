import {useEffect, useState} from "react";


export const useSaveItem = (key, product) => {
    // Guardar los items en localstorage
    const [listProducts, setList] = useState(() => {
        const storedList = localStorage.getItem(key);
        return storedList ? JSON.parse(storedList) : product;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(listProducts));
    }, [listProducts]);

    return [listProducts, setList];
}