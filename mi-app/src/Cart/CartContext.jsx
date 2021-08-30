import { createContext, useState,useEffect } from "react";
export const contexto = createContext();

const { Provider } = contexto;

const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [precioTotal, setPrecioTotal] = useState(0);

    const addItem = (product) => {
        if (inCart(product.id)) {
            const newCant = product.quantity + cart[cart.findIndex(e => e.product.id === product.products.id)].quantity;
            const newCart = { ...product, quantity: newCant }

            const carritoActual = cart.filter((e) => e.products.id !== product.products.id);
            setCart([...carritoActual, newCart])
        } else {
            setCart([...cart, product])
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