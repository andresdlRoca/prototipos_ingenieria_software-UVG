import BarraLateral from "./components/BarraLateral";
import Header from "./components/Header";
import Crear_publicacion from "./components/Crear_publicacion";

function App() {
  return (
    <div className="container">
      <Header navSet="ON"/>{/** navSet = "ON" para mostrar opcinones en la barra de navegacion; OFF para no mostroarla */}
      <div className="flex_container_sidebar_and_content">
        <BarraLateral />
        <Crear_publicacion />
      </div>
  
    </div>
  );
}
export default App;
