import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);
    const incrementoContador = () => {
        if (contador < stock) {
            setContador(contador +1)
        }
        
    };

    const decrementoContador = () => {
        if (contador > 1)
        setContador(contador -1)
    }
    return (
        <div className="text-center card w-50">
            <div className="card-body">
                <h5 className="card-title">Producto X</h5>
                <div className="d-flex mb-2  justify-content-center">
                    <button type="button" class="btn btn-success" onClick={incrementoContador}>+</button>
                    <div className="mx-2">{contador}</div>
                    <button type="button" class="btn btn-danger" onClick={decrementoContador}>-</button>
                </div>
                <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-warning">Agregar</button>
                </div>
            </div>
        </div>
        )
}

export default ItemCount;