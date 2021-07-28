import Carrito from '../img/carrito.png';

const NavBar = () =>
    <>
    <nav class="nav justify-content-center navbar-dark bg-dark bg-gradient">
        <a class="nav-link active text-warning" aria-current="page" href="#top">Home</a>
        <a class="nav-link text-warning" href="#top">Nosotros</a>
        <a class="nav-link text-warning" href="#top">Nuestros Productos</a>
        <img src={Carrito}/>
    </nav>
    </>

export default NavBar;