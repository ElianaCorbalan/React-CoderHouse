import Carrito from '../img/carrito.png';
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from "./CartContext"

const CartWidget = () => {

    const { cart } = useContext(contexto)
    
    return (
        <NavLink 
        style={{color:'orange'}} 
        to="/cart">
            <div className="px-5 justify-content-end">
            <img src={Carrito} alt=""/>
            <span className="text-warning fs-5 color-warning">{cart.reduce((acumulador, products) => acumulador + products.quantity, 0)}</span>
            </div>
        </NavLink>
    )
}

export default CartWidget;