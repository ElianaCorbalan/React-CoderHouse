import { useEffect, useState } from 'react';

const ItemDetail = () => {
    const [productos, setProductos] = useState();

    useEffect(() => {
        setTimeout(() => fetch('https://fakestoreapi.com/products?limit=1').then(res => res.json()).then(json => setProductos(json)), 2000)
    }, []);

    return (
        <div className="row row-cols-2 row-cols-md-4 g-2 mx-auto container">
            {productos && productos.map(product => {
                return (
                    <div className="card text-dark bg-light mb-3">
                        <div className="card-body">
                            <img style={{ width: '35px' }} src={product.image} alt='' />
                            <p className="card-text fs-6">{product.description}</p>
                            <p className="card-text">${product.price}</p>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default ItemDetail;