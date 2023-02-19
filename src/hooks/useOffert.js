import {useEffect, useState} from "react";

export const useOffert = (products, discount) => {
    const [offertProducts, setModifiedList] = useState([]);

    useEffect(() => {
        const newList = products.map(item => {
            return { ...item, price: item.price-item.price*discount };
        });
        setModifiedList(newList);
    }, [products, discount]);

    return offertProducts;
}

