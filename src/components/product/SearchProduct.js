import React, {useEffect, useState} from 'react';
import '../../style/Product.css'
import {Product} from "./Products";
import { useLocation } from 'react-router-dom';
import {searchProductUrl} from "../../variables/variables";

export const SearchProduct = () => {

    const [q, setQuery] = useState('');
    const saveValue = event => {
        setQuery(event.target.value)
        console.log(q)
    };

    return (
        <>
            <div className="">
                <div className="p-2">
                    <div className="input-group">
                        <div className="form-outline">
                            <input type="search" className="form-control" onChange={saveValue}/>
                        </div>
                        <a href={`/product/search/?q=${q}`}>
                        <button type="button" className="btn btn-primary" >
                            <i className="fa fa-search"></i>
                        </button>
                        </a>
                </div>
            </div>

            </div>
        </>
    );
}

export const ResultSearch = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const q = params.get('q');

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(searchProductUrl+"?q="+q)
            ).json();
            setProducts(data);
            console.log(data)
        };

        dataFetch();
    }, []);;


    return (
        <div className="main-container">
            <h1>Resultados busqueda para: {q} </h1>
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
