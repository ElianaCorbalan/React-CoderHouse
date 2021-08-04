import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";


//Componentes 
const App = () =>{

return (
    <>
        <Header />
        <NavBar />
        <h1 className="text-center my-4">Cheddar-Bar</h1>
        <div className="row justify-content-center">
            <ItemListContainer />
            <ItemCount stock={5} initial={1} />
        </div>
    </>)
}
export default App;