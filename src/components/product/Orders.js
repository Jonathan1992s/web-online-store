
import React, {useCallback, useEffect, useState} from "react";
import '../../style/Order.css'
import {ordersUrl, username} from "../../variables/variables";


export const Orders = () => {

    const key = 'order'
    const [orderList, setList] = useState([]);

    useEffect(() => {
        let orders = JSON.parse(localStorage.getItem(key));
        if (!orders) {
            orders = [];
        }
        setList(orders);
    }, []);
    const total = orderList.reduce((acc, product) => acc + parseFloat( product.quantity*( product.enableDiscount ? (product.price-product.price* (product.discount)) : product.price)), 0);

    const handleClick = async () => {
        const response = await fetch(ordersUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "client": username,
                "date": new Date(),
                "total": total,
                "products": orderList
            })
        }).then((response) => {
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

        }).catch();
        localStorage.removeItem(key);
        setList([])
        const responseData = await response.json();
        console.log(responseData)

        alert("Compra realizada con éxito")
    }

    return (
        <div >
            <div className="main-container">
                <h1>Productos a Comprar</h1>
                <div className='order'>
                    <div className="order-container">
                        <table id="orders">
                            <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {orderList.map(item => (
                                <tr key={item.id}>

                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{(item.price*item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <br/>
                        <p><span className="label">Total: </span>{total.toFixed(2)}</p>
                        <button  className="btn btn-primary" onClick={handleClick}> Realizar Compra </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
