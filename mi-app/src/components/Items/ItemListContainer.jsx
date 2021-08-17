import ItemList from "./ItemList";
import { useEffect, useState } from 'react';
import { useParams } from "react-router";

const ItemListContainer = () => {
    const { id } = useParams();
    const [products, setProducts] = useState();

    useEffect(() => {
        if (id) {
            fetch(`https://fakestoreapi.com/products/category/${id}`).then(res => res.json()).then(json => setProducts(json))
        } else fetch(`https://fakestoreapi.com/products`).then(res => res.json()).then(json => setProducts(json))
    }, [id])

    return (
        <div className="row justify-content-center">
            <div className="text-center">
                <h3 className="mt-4">
                    <ItemList products={products} />
                </h3>
            </div>
        </div>
    )
}

export default ItemListContainer;