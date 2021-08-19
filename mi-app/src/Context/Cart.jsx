import { useContext } from "react";
import { contexto } from "./CartContext";


const Cart = () => {
    const { cart, removeItem, clear} = useContext(contexto)

    return (
        <>
            <h2>Carrito de compras</h2>
            {cart.map(product =>
                <div key={product.products.id}>
                    <img style={{ width: '30px' }} src={product.products.image} alt=""></img>
                    <p>{product.products.title} x {product.quantity}</p>
                    <p>${product.products.price * product.quantity}</p>
                    <button className="btn btn-danger m-1" type="button" onClick={() => removeItem(product.products.id)}>-</button>
                </div>
            )}
            
            {cart.length > 0 ? 
                <div>
                    <button className="btn btn-danger m-3" type="button" onClick={()=>clear(cart)}>Eliminar todo</button>
                </div>
                :
                <p className="text-danger mt-4 fs-5">No hay elementos en el carrito</p>
                }
        </>
    );
}

export default Cart;