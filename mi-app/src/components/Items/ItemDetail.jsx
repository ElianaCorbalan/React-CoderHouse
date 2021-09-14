import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { contexto } from '../../Cart/CartContext';

const ItemDetail = ({ product }) => {
    const { addItem } = useContext(contexto);
    const [terminar, setTerminar] = useState(false);
    const [cantidad, setCantidad] = useState();

    const onAdd = (cantidad) => {
        const agregarItem = {
            products : product ,
            quantity : cantidad
        }
        
        addItem(agregarItem);
        setCantidad(cantidad);
        setTerminar(true);
    }
    return (
        <div className="row row-cols-2 row-cols-md-2 g-2 mx-auto container justify-content-center">
            {product &&
                <div className="card text-dark bg-light mb-3">
                    <div className="card-body">
                        <img style={{ width: '260px' }} src={product.imageId} alt='' />
                        <p className="card-text fs-6">{product.description}</p>
                        <p className="card-text">${product.price}</p>
                        {!terminar && <ItemCount initial={1} onAdd={(cantidad) => onAdd(cantidad)} stock={product.stock} isConfirm={true} />}
                        {terminar && <div className="d-flex justify-content-center">
                            <NavLink to={`/cart?${product.id}&cant=${cantidad}`} className="btn btn-outline-warning mt-3">Ir al carrito</NavLink>
                            <NavLink to={`/`} className="btn btn-ligth mt-3"> Seguir comprando</NavLink>
                        </div>}
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemDetail;
