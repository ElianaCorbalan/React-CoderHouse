
import ItemCount from "./ItemCount";
const ItemDetail = ({ product }) => {

    return (
        <div className="row row-cols-2 row-cols-md-4 g-2 mx-auto container">
            {product &&
                <div className="card text-dark bg-light mb-3">
                    <div className="card-body">
                        <img style={{ width: '35px' }} src={product.image} alt='' />
                        <p className="card-text fs-6">{product.description}</p>
                        <p className="card-text">${product.price}</p>
                        <ItemCount initial={1} stock={5}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemDetail;