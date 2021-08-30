import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import CartContainer from "./Cart/CartContainer";
import Form from "./components/Form";
import CustomProvider from "./Cart/CartContext";

const App = () => {

    return (
        <BrowserRouter>
        <CustomProvider>
            <Header />
            <NavBar categories={null} />
            <Switch>
                <Route path="/" component={ItemListContainer} exact/>
                <Route path="/categories/:category" component={ItemListContainer}/>
                <Route path="/detail/:id" component={ItemDetailContainer}/>
                <Route path="/cart" component={CartContainer}/>
                <Route path="/Form" component={Form}/>
            </Switch>
            <Footer/>
        </CustomProvider>
        </BrowserRouter>
    )
}
export default App;