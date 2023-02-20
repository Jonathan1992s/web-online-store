
import React, {useEffect, useState} from "react";
import '../../style/Home.css'
import {Product} from "../product/Products";

export const Home = () => {

    const url = 'http://localhost:8762/ms-buscador/products'
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(url)
            ).json();
            setProducts(data);
            console.log(data)
        };

        dataFetch();
    }, []);;

    return (
        <div className="main-container">
            <h1>Productos</h1>
           <div className="container card-gap">
               {
                   products.map((product) => (
                       <Product key={product.id} product={product}/>
                   ))
               }
           </div>
       </div>
    );
}
