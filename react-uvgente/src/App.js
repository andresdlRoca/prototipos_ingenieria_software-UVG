import BarraLateral from "./components/BarraLateral";
import BuscadorMain from "./components/BuscadorMain";
import Header from "./components/Header";
import Bandeja_Entrada from "./components/Bandeja_Entrada";
import Reportar_Problema from "./components/Reportar_Problema"
import TutoriaInfo from "./components/TutoriaInfo";
import VentaInfo from "./components/VentaInfo";

import Login from "./components/Login"
function App() {
  return (
    <div className="container">
      <Header navSet="ON"/>{/** navSet = "ON" para mostrar opcinones en la barra de navegacion; OFF para no mostroarla */}
      <div className="flex_container_sidebar_and_content">
        <BarraLateral />
        <BuscadorMain /> 
      </div>
    </div>
  );
}

export default App;
