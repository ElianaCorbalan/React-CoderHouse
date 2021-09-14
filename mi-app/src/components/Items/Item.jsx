import { NavLink } from "react-router-dom";

const Item = ({ products }) => {
    return (
        <>
            {products && products.map((c) => {
                return (<div className="bg-light mb-3" key={c.id}>
                    <div className="card-body">
                    <NavLink to={`/detail/${c.id}`} className="row text-decoration-none align-items-center justify-content-center gy-3">
                        <div >
                            <h4 className="text-dark m-0 fs-3 mb-3 text-nowrap">{c.title}</h4>
                            <img loading="lazy" style={{ width:'150px', height:'200px'}} src={c.imageId} alt='' />
                            <p className="fs-6 mt-3 mb-0 text-secondary">Pagando en efectivo</p>
                            <p className="text-dark">${c.price} c/u</p>
                        </div>
                        </NavLink>
                        <div>
                        <NavLink to={`/detail/${c.id}`} className="btn btn-outline-dark mt-1">Ver mas</NavLink>
                        </div>
                    </div>
                </div>)
            })}
        </>
    )
}

export default Item;