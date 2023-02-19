
import React from "react";
import '../../style/Home.css'
import data from '../../data/products.json'
import {Product} from "../product/Products";

export const Home = () => {

    return (
        <div className="main-container">
            <h1>Productos</h1>
           <div className="container card-gap">
               {
                   data.map((product) => (
                       <Product key={product.id} product={product}/>
                   ))
               }
           </div>
       </div>
    );
}
