
import React, {useCallback, useEffect, useState} from "react";
import '../../style/Order.css'


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
    const total = orderList.reduce((acc, product) => acc + parseFloat(product.price), 0);

    const confirmOrder = useCallback(() => {
        // Agregar logica de confirmacion de compra
        localStorage.removeItem(key);
        setList([])
        alert("Compra realizada con exito")
    },[]);

    return (
        <div >
            <div className="main-container">
                <h1>Productos a Comprar</h1>
                <div className='order'>
                    <div className="order-container">
                        <table id="orders">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                            </tr>
                            </thead>
                            <tbody>
                            {orderList.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <br/>
                        <p><span className="label">Total: </span>{total.toFixed(2)}</p>
                        <button  className="btn btn-primary" onClick={() => confirmOrder()}> Realizar Compra </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
