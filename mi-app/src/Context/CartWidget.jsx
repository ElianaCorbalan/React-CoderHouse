import Carrito from '../img/carrito.png';
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from "./CartContext"

const CartWidget = () => {

    const { cart } = useContext(contexto)
    
    return (
        <NavLink to="/cart">
            <img src={Carrito} alt="" />
            {cart.reduce((acumulador, products) => acumulador + products.quantity, 0)}
        </NavLink>
    )
}

export default CartWidget;