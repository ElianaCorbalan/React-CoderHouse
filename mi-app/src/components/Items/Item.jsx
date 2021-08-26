import { NavLink } from "react-router-dom";

const Item = ({ products }) => {
    return (
        <>
            {products && products.map((c) => {
                return (<div className="card text-dark bg-light mb-3" key={c.id}>
                    <div className="card-body">
                        <h4 className="card">{c.title}</h4>
                        <img loading="lazy" style={{ width: '240px' }} src={c.imageId} alt='' />
                        <p className="fs-1">${c.price}</p>
                        <div>
                        <NavLink to={`/detail/${c.id}`} className="btn btn-success mt-3">Detalles</NavLink>
                        </div>
                    </div>
                </div>)
            })}
        </>
    )
}

export default Item;