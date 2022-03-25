import BarraLateral from "./components/BarraLateral";
import BuscadorMain from "./components/BuscadorMain";
import Header from "./components/Header";
import Bandeja_Entrada from "./components/Bandeja_Entrada/Bandeja_Entrada";
import Reportar_Problema from "./components/Reportar_Problema"
import TutoriaInfo from "./components/TutoriaInfo";
import VentaInfo from "./components/VentaInfo";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MiPerfil from  "./components/MiPerfil"
import Login from "./components/Login"
function App() {
  return (
<<<<<<< HEAD
    <div className="container">
      <Header navSet="ON"/>{/** navSet = "ON" para mostrar opcinones en la barra de navegacion; OFF para no mostroarla */}
      <div className="flex_container_sidebar_and_content">
        <BarraLateral />
        <Bandeja_Entrada />

=======
    <Router>
      <div className="container">
        <Header navSet="ON"/>{/** navSet = "ON" para mostrar opcinones en la barra de navegacion; OFF para no mostroarla */}
        <div className="flex_container_sidebar_and_content">
          <BarraLateral />
          <Routes>
            <Route path="/" element = {<BuscadorMain />}/>
            <Route path="/profile" element = {<MiPerfil />}/>
            <Route path="/report" element = {<Reportar_Problema />}/>
            <Route path="/bandeja-de-entrada" element = {<Bandeja_Entrada />}/>

          </Routes>
        </div>
>>>>>>> 2dfefa997e13ba42cc7b4cd5c46f0164c609d176
      </div>
    </Router>
  );
}

export default App;
