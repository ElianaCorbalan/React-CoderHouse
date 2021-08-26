import { NavLink } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";
import { useContext } from "react";
import { contexto } from "../Cart/CartContext";

const NavBar = () => {
        let { cart } = useContext(contexto)
        return (
            <>
        <nav className="nav justify-content-center navbar-dark bg-dark bg-gradient">
            <NavLink to={`/`} className="nav-link active text-warning" aria-current="page" href="#top">Home</NavLink>
            <NavLink to={`/categories/Cremas`} className="nav-link text-warning" href="#top">Cremas</NavLink>
            <NavLink to={`/categories/accesorios`} className="nav-link text-warning" href="#top">Accesorios</NavLink>
            <NavLink to={`/categories/MakeUp`} className="nav-link text-warning" href="#top">Make Up</NavLink>
            {cart.length > 0 ?
            <CartWidget/>:''}
        </nav>
        <div>
            <h2 className="text-center my-4">TIENDA<span className="text-warning"> UNICORNIO</span></h2>
        </div>
        </>
        )
}

export default NavBar;