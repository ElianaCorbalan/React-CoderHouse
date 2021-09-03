import { createContext, useState,useEffect } from "react";
export const contexto = createContext();

const { Provider } = contexto;

const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [precioTotal, setPrecioTotal] = useState(0);

    const addItem = (p) => {
        if (inCart(p.products.id)) {
            const newCant = p.quantity + cart[cart.findIndex(e => e.products.id === p.products.id)].quantity;
            console.log(newCant)
            const newCart = { ...p, quantity: newCant }
            const carritoActual = cart.filter((e) => e.products.id !== p.products.id);
            setCart([...carritoActual, newCart])
        } else {
            setCart([...cart, p])
        }
    }

    const removeItem = (id) => {
        let elements = cart.filter((e) => e.products.id !== id)
        setCart(elements);
    }
    const clear = () => {
        setCart([]);
        setPrecioTotal();
    }

    const inCart = (id) => {
        return cart.find(e => e.products.id === id)
    }

    useEffect(() => {
        setPrecioTotal(cart.reduce((acumulador, product) => acumulador + product.products.price * product.quantity, 0).toFixed(2));
    }, [cart])

    const contexto_para_consumir = { cart, addItem, removeItem, clear, inCart, setPrecioTotal, precioTotal, nombre, setNombre, telefono, setTelefono, email, setEmail }
    return (
        <Provider value={contexto_para_consumir}>
            {children}
        </Provider>
    )
}
export default CustomProvider;