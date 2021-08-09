
const Item = ({ title, description, price ,image }) => {
    return (
        <>
        <div className="card text-dark bg-light mb-3">
            <div className="card-body">
                <h4 className="card">{title}</h4>
                <img style={{width:'35px'}}src={image} alt=''/>
                <p className="card-text fs-6">{description}</p>
                <p className="card-text">${price}</p>
                <button click= "" className="btn btn-success">Detalles</button>
            </div>
        </div>
        </>
    )
};

export default Item;

