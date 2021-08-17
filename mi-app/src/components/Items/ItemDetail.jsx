
import ItemCount from "./ItemCount";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ItemDetail = ({ product }) => {
    const [terminar, setTerminar] = useState(false);
    const [cantidad, setCantidad] = useState();

    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        setTerminar(true);
    }


    return (
        <div className="row row-cols-2 row-cols-md-4 g-2 mx-auto container justify-content-center">
            {product &&
                <div className="card text-dark bg-light mb-3">
                    <div className="card-body">
                        <img style={{ width: '70px' }} src={product.image} alt='' />
                        <p className="card-text fs-6">{product.description}</p>
                        <p className="card-text">${product.price}</p>
                        {!terminar && <ItemCount initial={1} onAdd={(cantidad) => onAdd(cantidad)} stock={product.quantity} />}
                        {terminar && <div className="d-flex justify-content-center">
                            <NavLink to={`/cart?${product.id}&cant=${cantidad}`} className="btn btn-success mt-3">Terminar mi compra</NavLink>
                        </div>}
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemDetail;