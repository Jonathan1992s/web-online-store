import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from "../components/layout/Home";
import {DefaultComponent} from "../components/layout/DefaultComponent";
import {Deals} from "../components/product/Deals";
import {Product, ProductDetail} from "../components/product/Products";
import {Orders} from "../components/product/Orders";
import {PreviusOrders} from "../components/product/PreviusOrders";
import {ResultSearch} from "../components/product/SearchProduct";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/product" element={<Product/>}/>
                    <Route exact path="/product/:id" element={<ProductDetail/>}/>
                    <Route exact path="/product/deal" element={<Deals/>}/>
                    <Route exact path="/product/order" element={<Orders/>}/>
                    <Route exact path="/product/search" element={<ResultSearch/>}/>
                    <Route exact path="/product/order/previous" element={<PreviusOrders/>}/>

                    <Route path="*" element={<DefaultComponent/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
};
