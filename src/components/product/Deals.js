
import React, {useEffect, useState} from "react";
import '../../style/Home.css'
import {Product} from "./Products";
import {dealsUrl, paramKeyEnableDiscount, paramValueEnableDiscount} from "../../variables/variables"


export const Deals = () => {

    const [offertProducts, setOffertProducts] = useState([]);
    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(dealsUrl+"?"+paramKeyEnableDiscount+"="+paramValueEnableDiscount,{mode: 'no-cors'}).then((response) => {
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
                setOffertProducts(data);
            }

        };

        dataFetch();
    }, []);;

    return (
        <div >
            <div className="main-container">
                <h1>Productos de oferta</h1>
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