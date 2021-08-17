import { NavLink } from "react-router-dom";

const Item = ({ products }) => {
    return (
        <>
            {products && products.map((c) => {
                return (<div className="card text-dark bg-light mb-3" key={c.id}>
                    <div className="card-body">
                        <h4 className="card">{c.title}</h4>
                        <img style={{ width: '80px' }} src={c.image} alt='' />
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