
import React, {useEffect, useState} from "react";
import '../../style/Home.css'
import data from '../../data/products.json'
import {useOffert} from "../../hooks/useOffert";
import {Product} from "./Products";


export const Deals = () => {
    const discount = 0.15
    const host = 'https://e7ea40b7-3ad7-42f1-bddf-fe55d234d7dd.mock.pstmn.io/products'
    const offertProducts = useOffert(data, 0.15)
    const [products01, setList] = useState([])

    useEffect(()=> {
        fetch(host,{method:'GET'}).then(async (response) => {
            console.log(response.status); // devuelve 200, 400, 500...
            var responseJson = await response.json();
        })
        .catch(e => {
            console.log(e.message) ;
        });
    })

    return (
        <div >
            <div className="main-container">
                <h1>Productos con {discount*100}% de descuento</h1>
                <div className="container card-gap">
                    {
                        offertProducts.map((product) => (
                            <Product
                                key={product.id}
                                product={product}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}