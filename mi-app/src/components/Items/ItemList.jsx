import Item from '../Items/Item';
import { useEffect, useState } from 'react';

const ItemList = () => {
    const [productos, setProductos] = useState();
    
    useEffect(() => {
        setTimeout(() => fetch('https://fakestoreapi.com/products?limit=8').then(res => res.json()).then(json => setProductos(json)), 2000)
    }, []);

    return (
        <div className="row row-cols-2 row-cols-md-4 g-2 mx-auto container">
                    {productos && productos.map(product => 
                        { return (<Item title={product.title} key={product.id} price={product.price}/>) })}
            </div>
    )
}

export default ItemList;