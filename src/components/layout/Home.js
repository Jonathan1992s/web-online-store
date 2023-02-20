
import React, {useEffect, useState} from "react";
import '../../style/Home.css'
import {Product} from "../product/Products";
import {productsUrl} from "../../variables/variables";

export const Home = () => {

    //const url = 'http://localhost:8762/products'
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(productsUrl).then((response) => {
                    switch(response.status){
                        case 500:
                           window.alert("¡Un error ha ocurrido!")
                            break;
                        case 404:
                            window.alert("¡No se encontraron registros!")
                            break;
                        default:
                            return response.json();
                    }

            }).catch()
            );
            if (data!=null)
            {
                setProducts(data);
            }


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
