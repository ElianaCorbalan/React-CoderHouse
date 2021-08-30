import { useContext } from "react";
import { contexto } from "./CartContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear,precioTotal } = useContext(contexto)
    console.log("precioTotal" ,precioTotal)

    return (
        <>
            <h3 className="text-center my-4">TU<span className="text-warning"> CARRITO</span></h3>
            {cart.map(product =>
                <div className="card" key={product.products.id}>
                    <div>
                        <img style={{ width: '180px'}} src={product.products.imageId} alt=""></img>
                    </div>
                    <h4><strong>${product.products.price * product.quantity}</strong></h4>
                    <p className="d-inline text-uppercase">{product.products.title} x {product.quantity}Unid/</p>
                    <button className="btn btn-danger m-1 " type="button" onClick={() => removeItem(product.products.id)}>X</button>
                </div>
            )}

            {cart.length > 0 ?
                <div>
                    <p className="m-3 total"><strong>TOTAL: ${precioTotal}</strong></p>
                    <button className="btn btn-outline-danger m-3" type="button" onClick={() => clear(cart)}>Eliminar todo</button>
                    <NavLink to={`/Form`}><p><button className="btn btn-outline-warning" type="button">Terminar compra</button></p></NavLink>
                </div> :
                <>
                <p className="text-danger mt-4 fs-5">No hay elementos en el carrito</p>
                <NavLink to="/">
                <button className="btn btn-warning m-3" type="button">Click aqui para ver las ofertas</button>
                </NavLink>
                </>
            }
        </>
    );
}

export default Cart;