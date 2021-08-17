import Item from "./Item";

const ItemList = ({products}) => {
    return(
        <>
            <div className="row row-cols-2 row-cols-md-4 g-2 mx-auto container">
                <Item products={products}/>
            </div>
        </>
    )
};

export default ItemList;