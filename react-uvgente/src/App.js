import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import BandejaEntrada from './components/Bandeja_Entrada/BandejaEntrada'; // esta
import Ajustes from './components/Ajustes/Ajustes';
import ReportarProblema from './components/ReportarProblema/ReportarProblema'; // esta
import Signup from './components/Signup/Singup';
import MiPerfil from './components/MiPerfil/MiPerfil';
import Ayuda from './components/Ayuda/Ayuda';
import NavBar from './components/new-nav-bar/NavBar';
import NewSideBar from './components/new-side-bar/NewSideBar';
import NewVentas from './components/Ventas/NewVentas';
import NewCompra from './components/Compras/NewCompra';
import NewServicio from './components/Servicio/NewServicio';
import NewPaginaPrincipal from './components/NewPaginaPrincipal/NewPaginaPrincipal';
import Favorites from './components/Favoritos/Favorites';
import CardsVentas from './components/Mis_Ventas/CardsVentas'; // esta
import OpcionesDeVenta from './components/opciones_de_venta/OpcionesDeVenta';
import RegistroOrg from './components/RegistroOrganizacion/RegistroOrg';
import FloatingAgregar from './components/Mis_Ventas/FloatingAgregar';
import AgregarProducto from './components/Mis_Ventas/AgregarProducto';
import EditarProductos from './components/Mis_Ventas/EditarProducto';
import MobileNavBar from './components/new-nav-bar/MobileNavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NewBottomBar from './components/new-side-bar/NewBottomBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <Signup />
            </div>
          }
        />
        <Route
          path="/top-servicios"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <NewServicio title="Top tutores" />
              <NewSideBar />
              <NewBottomBar />
            </div>
          }
        />
        <Route
          path="/servicios"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <NewServicio title="Tutores" />
              <NewSideBar />
              <NewBottomBar />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <Login />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <NewPaginaPrincipal />
              <NewSideBar />
              <NewBottomBar />
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <MiPerfil />
              <NewSideBar />
              <NewBottomBar />
            </div>
          }
        />
        <Route
          path="/report"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <ReportarProblema />
              <NewSideBar />
              <NewBottomBar />
            </div>
          }
        />
        <Route
          path="/bandeja-de-entrada"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <BandejaEntrada />
              <NewSideBar />
              <NewBottomBar />
            </div>
          }
        />
        <Route
          path="/mis-compras"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <NewCompra />
              <NewSideBar />
              <NewBottomBar />
            </div>
          }
        />
        <Route
          path="/ajustes"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <Ajustes />
              <NewSideBar />
              <NewBottomBar />
            </div>
          }
        />
        <Route
          path="/ayuda"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <Ayuda />
              <NewSideBar />
              <NewBottomBar />
            </div>
          }
        />
        <Route
          path="/top-ventas"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <div id="page-main-content">
                <NewVentas title="Top Ventas" />
              </div>
              <NewSideBar />
              <NewBottomBar />
            </div>
          }
        />
        <Route
          path="/ventas"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <NewVentas title="Ventas" />
              <NewSideBar />
              <NewBottomBar />
            </div>
          }
        />
        <Route
          path="/articulos-publicados"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <CardsVentas title="Articulos" />
              <FloatingAgregar />
              <NewSideBar />
              <NewBottomBar />
            </div>
          }
        />
        <Route
          path="/publicar-articulos"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <AgregarProducto title="Articulos" />
              <NewSideBar />
              <NewBottomBar />
            </div>
          }
        />
        <Route
          path="/editar-articulo"
          element={
            <div className="all-wrapper">
              fdsafdsafdsa
              <NavBar />
              <EditarProductos title="Edicion Articulos" />
              <NewSideBar />
            </div>
          }
        />
        <Route
          path="/favorites"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <Favorites />
              <NewSideBar />
              <NewBottomBar />
            </div>
          }
        />
        <Route
          path="/vender"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <OpcionesDeVenta />
              <NewSideBar />
              <NewBottomBar />
            </div>
          }
        />
        <Route
          path="/registrar-organizaciones"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MobileNavBar />
              <RegistroOrg />
              <NewSideBar />
              <NewBottomBar />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
