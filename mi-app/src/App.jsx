import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemCount from "./components/Items/ItemCount";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";

//Componentes 
const App = () =>{

return (
    <>
        <Header />
        <NavBar />
        <h1 className="text-center my-4">Cheddar-Bar</h1>
        <div className="row justify-content-center">
            <ItemListContainer />
            <ItemCount stock={5} initial={1} onAdd={1} />
            <ItemDetailContainer/>
        </div>
    </>)
}
export default App;