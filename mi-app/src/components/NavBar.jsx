import Carrito from '../img/carrito.png';

const NavBar = () =>
    <>
        <nav className="nav justify-content-center navbar-dark bg-dark bg-gradient">
            <a className="nav-link active text-warning" aria-current="page" href="#top">Home</a>
            <a className="nav-link text-warning" href="#top">Nosotros</a>
            <a className="nav-link text-warning" href="#top">Nuestros Productos</a>
            <img src={Carrito} alt="" />
        </nav>
    </>

export default NavBar;