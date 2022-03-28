import BarraLateral from "./components/BarraLateral";
import BuscadorMain from "./components/BuscadorMain";
import Header from "./components/Header";
import Bandeja_Entrada from "./components/Bandeja_Entrada/Bandeja_Entrada";
import Reportar_Problema from "./components/Reportar_Problema"
import TutoriaInfo from "./components/TutoriaInfo";
import VentaInfo from "./components/VentaInfo";
import Singup from "./components/Singup";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MiPerfil from  "./components/MiPerfil"
import Login from "./components/Login"
function App() {
  return (
    <Router>
      <div className="container">
        <Header navSet="OFF"/>{/** navSet = "ON" para mostrar opcinones en la barra de navegacion; OFF para no mostroarla */}
        <div className="flex_container_sidebar_and_content">
          <BarraLateral />
          <Routes>
            <Route path="/" element = {<BuscadorMain />}/>
            <Route path="/profile" element = {<MiPerfil />}/>
            <Route path="/report" element = {<Reportar_Problema />}/>
            <Route path="/bandeja-de-entrada" element = {<Bandeja_Entrada />}/>
            <Singup />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
