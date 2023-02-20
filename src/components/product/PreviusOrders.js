
import data from '../../data/lastOrders.json'
import '../../style/PreviusOrder.css'
import React, {useEffect, useState} from "react";


export const PreviusOrders = () => {
    const username = 'unir'
    const url = 'http://localhost:8762/ms-operador/orders/'
    const [previusOrders, setPreviusOrders] = useState([]);
    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(url+username)
            ).json();
            setPreviusOrders(data);
            console.log(data)
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
