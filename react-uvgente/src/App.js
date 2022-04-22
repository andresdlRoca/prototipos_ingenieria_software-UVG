import BarraLateral from "./components/BarraLateral";
import BuscadorMain from "./components/BuscadorMain";
import Header from "./components/Header";
import Bandeja_Entrada from "./components/Bandeja_Entrada/Bandeja_Entrada";
import Reportar_Problema from "./components/Reportar_Problema"
import TutoriaInfo from "./components/TutoriaInfo";
import VentaInfo from "./components/VentaInfo";
import Singup from "./components/Signup/Singup";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MiPerfil from  "./components/MiPerfil"
import Login from "./components/Login"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div >
        <Header navSet="OFF"/>{/** navSet = "ON" para mostrar opcinones en la barra de navegacion; OFF para no mostroarla */}          
          <Routes>
          <Route path="/singup" element = {
              <Singup />
            }/>
            <Route path="/" element = {
            <div className="flex_container_sidebar_and_content">
              <BarraLateral /> 
              <BuscadorMain />
            </div>
            }/>
            <Route path="/profile" element = {
              <div className="flex_container_sidebar_and_content">
                <BarraLateral /><MiPerfil />
              </div>
            }/>
            <Route path="/report" element = {
              <div className="flex_container_sidebar_and_content">
                <BarraLateral /><Reportar_Problema />
              </div>
            }/>
            <Route path="/bandeja-de-entrada" element = {
              <div className="flex_container_sidebar_and_content">
                <BarraLateral />
                <Bandeja_Entrada />
              </div>
            }/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
