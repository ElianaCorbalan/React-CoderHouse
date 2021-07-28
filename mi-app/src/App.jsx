import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

//Componentes 
const App = () =>
    <>
        <Header/>
        <NavBar/>
        <h1 class="text-center my-4">Cheddar-Bar</h1>
        <ItemListContainer greeting="ItemList en Cheddar-Bar!"/>
    </>

export default App;