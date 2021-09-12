import { useContext } from "react";
import { contexto } from "./CartContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear,precioTotal } = useContext(contexto);
    const { changeQuantityItem } = useContext(contexto);

    const incrementoContador = (p) => {

        if (p.quantity < p.products.stock) onChangeQuantity({...p, quantity : p.quantity+1})
    };

    const decrementoContador = (p) => {

        if (p.quantity > 1) onChangeQuantity({...p , quantity : p.quantity-1})
    }

    const onChangeQuantity = (p) =>{

        const agregarItem = {
            products : p.products ,
            quantity : p.quantity
        }

        changeQuantityItem(agregarItem);
    }
    return (
        <>
            <h3 className="text-center my-4">Mi<span className="text-warning"> compra</span></h3>
                <div>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio por unidad</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Subtotal</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                {cart.map(product =>
                    <tr key={product.products.id}>
                    <th><img className="align-items-start" style={{ width:'100px', height:'70px'}}src={product.products.imageId} alt="" align="left"></img>{product.products.title}</th>
                    <td>${product.products.price}</td>
                    <td>
                        <div className="d-flex mb-2  justify-content-center">
                            <button className="btn btn-outline-secondary" onClick={()=>decrementoContador(product)}>-</button>
                            <p className="mx-2">{product.quantity}</p>
                            <button className="btn btn-outline-secondary" onClick={()=>incrementoContador(product)}>+</button>
                        </div>
                    </td>
                    <td>${product.products.price * product.quantity}</td>
                    <td><button className="btn btn-danger m-1 " type="button" onClick={() => removeItem(product.products.id)}>X</button></td>
                    </tr>)}
                </tbody>
                </table>
                </div>
            {cart.length > 0 ?
                <div>
                    <p className="m-3 total"><strong>TOTAL: ${precioTotal}</strong></p>
                    <button className="btn btn-outline-danger m-3" type="button" onClick={() => clear(cart)}>Eliminar todo</button>
                    <NavLink to={`/Form`}><p><button className="btn btn-outline-warning" type="button">Proceder con el pago</button></p></NavLink>
                </div> :
                <>
                <p className="text-danger mt-4 fs-5">No hay productos en el carrito</p>
                <NavLink to="/">
                <button className="btn btn-warning m-3" type="button">Click aqui para ver las ofertas</button>
                </NavLink>
                </>
            }
        </>
    );
}

export default Cart;