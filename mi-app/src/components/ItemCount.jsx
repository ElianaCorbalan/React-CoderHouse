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
        <div class="text-center card w-50">
            <div class="card-body">
                <h5 class="card-title">Producto X</h5>
                <div class="d-flex mb-2  justify-content-center">
                    <button type="button" class="btn btn-success" onClick={incrementoContador}>+</button>
                    <div class="mx-2">{contador}</div>
                    <button type="button" class="btn btn-danger" onClick={decrementoContador}>-</button>
                </div>
                <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-warning">Agregar</button>
                </div>
            </div>
        </div>
        )
}


export default ItemCount;