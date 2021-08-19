import { createContext, useState } from "react";
export const contexto = createContext();


const {Provider} = contexto;

const CustomProvider = ({children}) => {

    const [cart, setCart]= useState([])

    const addItem = (product) => {
    setCart([...cart, product])
    }

    const removeItem = (id) => {
        let elements = cart.filter((e)=> e.products.id !== id)
        setCart(elements);
    }
    const clear = () => {
        setCart([]);
    }
    
    const contexto_para_consumir = {cart,addItem,removeItem,clear}
    return (
        <Provider value ={contexto_para_consumir}>
            {children}
        </Provider>
    )
}
export default CustomProvider;