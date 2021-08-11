import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <NavBar categories={null} />
            <Switch>
                <Route path="/" component={ItemListContainer} exact/>
                <Route path="/categories/:id" component={ItemListContainer}/>
                <Route path="/detail/:id" component={ItemDetailContainer}/>
            </Switch>
        </BrowserRouter>
    )
}
export default App;