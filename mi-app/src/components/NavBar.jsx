import Carrito from '../img/carrito.png';
import { NavLink } from "react-router-dom"

const NavBar = () =>
    <>
        <nav className="nav justify-content-center navbar-dark bg-dark bg-gradient">
            <NavLink to={`/`} className="nav-link active text-warning" aria-current="page" href="#top">Home</NavLink>
            <NavLink to={`/categories/electronics`} className="nav-link text-warning" href="#top">Electronics</NavLink>
            <NavLink to={`/categories/men's clothing`} className="nav-link text-warning" href="#top">Men's clothing</NavLink>
            <NavLink to={`/categories/jewelery`} className="nav-link text-warning" href="#top">jewelery</NavLink>
            <NavLink to={`/categories/women's clothing`} className="nav-link text-warning" href="#top">Women's clothing</NavLink>
            <img src={Carrito} alt="" />
        </nav>
    </>

export default NavBar;