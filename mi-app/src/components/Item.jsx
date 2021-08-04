
const Item = ({ title, description, price }) => {
    return (
        <>
                    <div className="card text-dark bg-light mb-3">
                        <div className="card-body">
                            <h4 className="card">{title}</h4>
                            <p className="card-text fs-6">{description}</p>
                            <p className="card-text">${price}</p>
                            <a href="#inicio" className="btn btn-success">Detalles</a>
                        </div>
                    </div>
        </>
    )
};

export default Item
