import BarraLateral from "./components/BarraLateral";
import BuscadorMain from "./components/BuscadorMain";
import Header from "./components/Header";
import Bandeja_Entrada from "./components/Bandeja_Entrada/Bandeja_Entrada";
import Ajustes from "./components/Ajustes/Ajustes";
import Reportar_Problema from "./components/ReportarProblema/Reportar_Problema";
import Singup from "./components/Signup/Singup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MiPerfil from "./components/MiPerfil";
import Login from "./components/Login";
import Ayuda from "./components/Ayuda/Ayuda";
import NavBar from "./components/new-nav-bar/NavBar";
import NewSideBar from "./components/new-side-bar/NewSideBar";
import NewVentas from "./components/Ventas/NewVentas";
import NewCompra from "./components/Compras/NewCompra";
import NewServicio from "./components/Servicio/NewServicio";
import Favorites from "./components/Favoritos/Favorites";
import ProductoForm from "./components/productoForm/Producto_Form";
import OpcionesDeVenta from "./components/opciones_de_venta/OpcionesDeVenta";

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
              <NewServicio />
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
              <BuscadorMain />
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
                <NewVentas />
              </div>
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
      </Routes>
      {/* <ProductoForm /> */}
    </Router>
  );
}

export default App;
