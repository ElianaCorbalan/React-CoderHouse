import ItemDetail from "./ItemDetail";
import { useEffect, useState } from 'react';
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();


    useEffect(() => {
        //seteo cantidad de stock en 10
        fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json()).then(json => setProduct({...json, quantity : 10}))
    }, [id])

    return (
        <div className="text-center">
            <h3 className="mt-4">
                <ItemDetail product={product} />
            </h3>
        </div>)
};

export default ItemDetailContainer;