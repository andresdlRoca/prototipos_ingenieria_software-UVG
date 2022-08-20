import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Bandeja_Entrada from './components/Bandeja_Entrada/Bandeja_Entrada';
import Ajustes from './components/Ajustes/Ajustes';
import Reportar_Problema from './components/ReportarProblema/Reportar_Problema';
import Singup from './components/Signup/Singup';
import MiPerfil from './components/MiPerfil/MiPerfil';
import Ayuda from './components/Ayuda/Ayuda';
import NavBar from './components/new-nav-bar/NavBar';
import NewSideBar from './components/new-side-bar/NewSideBar';
import NewVentas from './components/Ventas/NewVentas';
import NewCompra from './components/Compras/NewCompra';
import NewServicio from './components/Servicio/NewServicio';
import NewPaginaPrincipal from './components/NewPaginaPrincipal/NewPaginaPrincipal';
import Favorites from './components/Favoritos/Favorites';
import Cards_Ventas from './components/Mis_Ventas/Cards_Ventas';
import OpcionesDeVenta from './components/opciones_de_venta/OpcionesDeVenta';
import Pregunta1 from './components/Preguntas/Pregunta1';
import Pregunta2 from './components/Preguntas/Pregunta2';
import Pregunta3 from './components/Preguntas/Pregunta3';
import Pregunta4 from './components/Preguntas/Pregunta4';
import Pregunta5 from './components/Preguntas/Pregunta5';
import Pregunta6 from './components/Preguntas/Pregunta6';
import Pregunta7 from './components/Preguntas/Pregunta7';
import Pregunta8 from './components/Preguntas/Pregunta8';
import Pregunta9 from './components/Preguntas/Pregunta9';
import RegistroOrg from './components/RegistroOrganizacion/RegistroOrg';

import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingAgregar from './components/Mis_Ventas/FloatingAgregar';
import AgregarProducto from './components/Mis_Ventas/AgregarProducto';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Singup />
            </div>
          }
        />
        <Route
          path="/top-servicios"
          element={
            <div className="all-wrapper">
              <NavBar />
              <NewServicio title="Top tutores" />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/servicios"
          element={
            <div className="all-wrapper">
              <NavBar />
              <NewServicio title="Tutores" />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Login />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="all-wrapper">
              <NavBar />
              <NewPaginaPrincipal />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MiPerfil />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/report"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Reportar_Problema />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/bandeja-de-entrada"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Bandeja_Entrada />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/mis-compras"
          element={
            <div className="all-wrapper">
              <NavBar />
              <NewCompra />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/ajustes"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Ajustes />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/ayuda"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Ayuda />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/top-ventas"
          element={
            <div className="all-wrapper">
              <NavBar />
              <div id="page-main-content">
                <NewVentas title="Top Ventas" />
              </div>
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/ventas"
          element={
            <div className="all-wrapper">
              <NavBar />
              <NewVentas title="Ventas" />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/articulos-publicados"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Cards_Ventas title="Articulos" />
              <FloatingAgregar/>
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/publicar-articulos"
          element={
            <div className="all-wrapper">
              <NavBar />
              <AgregarProducto title="Articulos" />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/favorites"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Favorites />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/vender"
          element={
            <div className="all-wrapper">
              <NavBar />
              <OpcionesDeVenta />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/Pregunta1"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Pregunta1 />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/Pregunta2"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Pregunta2 />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/Pregunta3"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Pregunta3 />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/Pregunta4"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Pregunta4 />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/Pregunta5"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Pregunta5 />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/Pregunta6"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Pregunta6 />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/Pregunta7"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Pregunta7 />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/Pregunta8"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Pregunta8 />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/Pregunta9"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Pregunta9 />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/registrar-organizaciones"
          element={
            <div className="all-wrapper">
              <NavBar />
              <RegistroOrg />
              <NewSideBar />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
