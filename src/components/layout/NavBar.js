import "../../style/NavBar.css"
import {SearchProduct} from "../product/SearchProduct";

export const NavBar = () =>  {
    return (
        <nav className="main-menu">
            <ul>
                <SearchProduct/>
                <li><a href="/">Inicio</a></li>
                <li><a href="/product/deal">Ofertas</a></li>
                <li><a href="/product/order">Realizar Compra</a></li>
                <li><a href="/product/order/previous">Ultimas Compras</a></li>

            </ul>
        </nav>
    )
}
