import ItemDetail from "./ItemDetail";
import { useEffect, useState } from 'react';
import { Spinner } from "reactstrap";
import { useParams } from "react-router";
import { firestore } from "../../firebase";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState();
    const [estado, setEstado] = useState("pendiente");
    const { id } = useParams();

    useEffect(() => {

        const db = firestore
        const collection = db.collection("items");
        
        if (id) {
            const filtrar = collection.doc(id)
            const query = filtrar.get();
            query.then((results) => {
                const id = results.id;
                const data = results.data()
                const dataFinal = { id, ...data}
                setProduct(dataFinal)
            }).catch((error)=> {
            }).finally(()=> {
                setEstado("finalizado")
            })
        }else {
            setEstado("finalizado")
        }
    }, [id])

    if(estado === "pendiente") {
        return (
            <div className="row justify-content-center align-items-center mt-5">
            <Spinner color="warning"/>
            </div>
        )
    } else {
        return (
            <div className="text-center">
                <h3 className="mt-4">
                    <ItemDetail product={product} />
                </h3>
            </div>
            )
        }
};

export default ItemDetailContainer;