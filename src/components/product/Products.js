import {Link, useParams} from "react-router-dom"
import '../../style/Product.css'
import React, {useCallback, useEffect, useState} from "react";
import {productsUrl} from "../../variables/variables";


export const Product = ({product}) => {
    const key = 'order'
    const saveOrder = useCallback((product) => {
        let orderList = JSON.parse(localStorage.getItem(key));
        if (!orderList) {
            orderList = [];
            orderList.push({
                id: product.id,
                name: product.name,
                price: product.enableDiscount===true ? (product.price-product.price* (product.discount)).toFixed(2) : product.price.toFixed(2),
                quantity: 1
        })
            localStorage.setItem(key,JSON.stringify(orderList))
        } else {
            let flagFoundItem = false
            let updateOrderList = orderList.map(item => {
                if (item.id === product.id) {
                    flagFoundItem = true
                    return {...item, quantity: item.quantity + 1};
                }
                return item
            });
            if (!flagFoundItem) {
                updateOrderList.push({
                    id: product.id,
                    name: product.name,
                    price: product.enableDiscount===true ? (product.price-product.price* (product.discount)).toFixed(2) : product.price.toFixed(2),
                    quantity: 1
                })
            }

            console.log(updateOrderList)
            localStorage.setItem(key,JSON.stringify(updateOrderList))
        }

    }, []);

    return <>
        <div className="row ">
            <div className="col" >
                <div className="card mx-3">
                    <div className="text-center">
                        <img className="card-img " src={`/products/${product.imageUrl}.png`}
                             onError={(e)=>{e.target.onerror = null; e.target.src="/products/sin-imagen.png"}}
                             alt={product.name}></img>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 card">
                <div className="card-header">
                    <Link className="card-title title" to={`/product/${product.id}`}><h5 >{product.name}</h5></Link>
                </div>
                <div className="card-body">
                    <div className="row card-text-detail">
                        <div className="col-3 weight-bold">
                            Detalle
                        </div>
                        <div className="col-9">
                            {product.description}
                        </div>
                        <div className="col-3  weight-bold">
                            Marca
                        </div>
                        <div className="col-9">
                            {product.brand}
                        </div>
                        <div className="col-3  weight-bold">
                            Categoria
                        </div>
                        <div className="col-9">
                            {product.category}
                        </div>
                        {product.enableDiscount ? (
                    <div className="row">
                        <div className="col-3  weight-bold">
                            Precio Anterior
                        </div>
                        <div className="col-9 old-price">
                            $ {product.price.toFixed(2)}
                        </div>
                        <div className="col-3  weight-bold">
                            Precio Actual
                        </div>
                        <div className="col-6">
                            $ {(product.price-product.price* (product.discount)).toFixed(2)}
                        </div>

                            <div  className="col-3 discount" >
                                Descuento
                                <h2>{product.discount*100}%</h2>

                            </div>

                    </div>  ) :
                            <div className="row">
                                <div className="col-3  weight-bold">
                                    Precio
                                </div>
                                <div className="col-9">
                                    $ {product.price.toFixed(2)}
                                </div>
                            </div>
                            }



                    </div>
                </div>
                <div className="card-footer text-muted text-center">
                    <button onClick={() => saveOrder(product)} className="btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    </>
}



export const ProductDetail = () => {
    const {id}  = useParams()
    const key = 'order'
    const [product, setProducts] = useState([]);

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(productsUrl+id).then((response) => {
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

                })
            );
            setProducts(data);
            console.log(data)
        };

        dataFetch();
    }, []);;

    const saveOrder = useCallback((product) => {
        let orderList = JSON.parse(localStorage.getItem(key));
        if (!orderList) {
            orderList = [];
            orderList.push({
                id: product.id,
                name: product.name,
                price: product.enableDiscount ? (product.price-product.price* (product.discount)).toFixed(2) : product.price.toFixed(2),
                quantity: 1
            })
            localStorage.setItem(key,JSON.stringify(orderList))
        } else {
            let flagFoundItem = false
            let updateOrderList = orderList.map(item => {
                if (item.id === product.id) {
                    flagFoundItem = true
                    return {...item, quantity: item.quantity + 1};
                }
                return item
            });
            if (!flagFoundItem) {
                updateOrderList.push({
                    id: product.id,
                    name: product.name,
                    price: product.enableDiscount===true ? (product.price-product.price* (product.discount)).toFixed(2) : product.price.toFixed(2),
                    quantity: 1
                })
            }

            console.log(updateOrderList)
            localStorage.setItem(key,JSON.stringify(updateOrderList))
        }

    }, []);
    return <>

        <div className="card ">
            <div className="card-header text-center">
                {product.name}
            </div>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <div className="row">
                    <div className="col">
                        <img className="card-img " src={`/products/${product.imageUrl}.png`}
                             onError={(e)=>{e.target.onerror = null; e.target.src="/products/sin-imagen.png"}}
                             alt={product.name}></img>
                    </div>

                    <div className="col">
                        <div className="row card-text-detail">
                            <div className="col-3 weight-bold">
                                Nuevos
                            </div>
                            <div className="col-9">
                                {product.stock}
                            </div>
                            <div className="col-3 weight-bold">
                                Descuento
                            </div>
                            <div className="col-9">
                                {product.discount*100}%
                            </div>
                            <div className="col-3 weight-bold">
                                Detalle
                            </div>
                            <div className="col-9">
                                {product.description}
                            </div>
                            <div className="col-3  weight-bold">
                                Marca
                            </div>
                            <div className="col-9">
                                {product.brand}
                            </div>
                            <div className="col-3  weight-bold">
                                Categoria
                            </div>
                            <div className="col-9">
                                {product.category}
                            </div>

                            <div className="row">
                                <div className="col-3  weight-bold">
                                    Precio
                                </div>
                                <div className="col-9">
                                    $ {product.price}
                                </div>
                            </div>

                        </div>
                        <button onClick={() => saveOrder(product)} className="btn btn-primary">Agregar al Carrito</button>
                    </div>

                </div>
            </div>
            <div className="card-footer text-muted">
                Envió Gratis
            </div>
        </div>

    </>
}