import Carrito from '../img/carrito.png';
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from "./CartContext"

const CartWidget = () => {

    const { cart } = useContext(contexto)
    
    return (
        <NavLink to="/cart">
            <img src={Carrito} alt="" />
            {cart.length ? cart.length : null}
        </NavLink>
    )
}

export default CartWidget;