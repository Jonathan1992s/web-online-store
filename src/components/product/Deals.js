
import React from "react";
import '../../style/Home.css'
import data from '../../data/products.json'
import {useOffert} from "../../hooks/useOffert";
import {Product} from "./Products";


export const Deals = () => {
    const discount = 0.15
    const offertProducts = useOffert(data, 0.15)

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