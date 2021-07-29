import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

//Componentes 
const App = () =>
    <>
        <Header/>
        <NavBar/>
        <h1 class="text-center my-4">Cheddar-Bar</h1>
        <div class="row justify-content-center">
            <ItemListContainer greeting="ItemList!"/>
            <ItemCount stock={5} initial={1}/>
        </div>
    </>

export default App;