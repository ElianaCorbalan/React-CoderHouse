import { Spinner } from "reactstrap";
import ItemList from "./ItemList";
import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { firestore } from "../../firebase";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [estado , setEstado] = useState("pendiente");
    const { category } = useParams();

    useEffect(()=> {
        const db = firestore;
        const collection = db.collection("items");
        if(category) {
            const filtrar = collection.where("categoryId", "==" , category);
            const query = filtrar.get();
            query.then((results)=> {
                const resultadosParse = []

                results.forEach((doc)=>{
                    const id = doc.id;
                    const data = doc.data()
                    const dataFinal = { id, ...data}
                    resultadosParse.push(dataFinal)
                });

                setProducts(resultadosParse)
                
            }).catch((error)=> {
                console.log(error)
            }).finally(()=> {
                setEstado("finalizado")
            })
    }else {
        const query = collection.get()
        query.then((results)=> {
            const resultadosParse = [];
            results.forEach((doc)=>{
                const id = doc.id;
                const data = doc.data()
                const dataFinal = { id, ...data}
                resultadosParse.push(dataFinal)
            });
            setProducts(resultadosParse)
        }).catch((error)=>{
            console.log(error)
        }).finally(()=>{
            setEstado("finalizado")
        });
    }

}, [category])

    if (estado === "pendiente") {
        return(
            <div className="row justify-content-center align-items-center mt-5">
            <Spinner color="warning"/>
            </div>
        )
    }else{
        return(
            <div className="row justify-content-center">
            <div className="text-center">
                <h3 className="mt-4">
                    <ItemList products={products} />
                </h3>
            </div>
        </div>
        )
    }
}


export default ItemListContainer;