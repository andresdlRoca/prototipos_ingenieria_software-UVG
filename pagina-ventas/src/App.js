import BarraLateral from "./components/BarraLateral";
import Cards_Ventas from "./components/Cards_Ventas";
import Header from "./components/Header";


function App() {
  return (
    <div className="container">
      <Header navSet="ON"/>{/** navSet = "ON" para mostrar opcinones en la barra de navegacion; OFF para no mostroarla */}
      <div className="flex_container_sidebar_and_content">
        <BarraLateral />
        <Cards_Ventas />
      </div>
  
    </div>
  );
}
export default App;