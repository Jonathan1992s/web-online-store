import '../../style/PreviusOrder.css'
import React, {useEffect, useState} from "react";
import {previusOrdersUrl, username} from "../../variables/variables";


export const PreviusOrders = () => {
    const [previusOrders, setPreviusOrders] = useState([]);
    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(previusOrdersUrl+username).then((response) => {
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
                setPreviusOrders(data);
            }

        };

        dataFetch();
    }, []);;

    return (
        <div >
            <div className="main-container">
                <h1>Compras Anteriores</h1>
                    <div className='order'>
                        {
                            previusOrders.map(previusOrders => (
                            <div className="order-container">
                                <p><span className="label">Fecha: </span>{previusOrders.date}</p>
                                <p><span className="label">Total: </span>$ {previusOrders.total}</p>
                                <table id="orders">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th>Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {previusOrders.products.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>$ {item.price}</td>
                                            <td>{item.quantity}</td>
                                            <td>{(item.quantity*item.price).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        ))
                        }
                    </div>
            </div>
        </div>
    );
}
