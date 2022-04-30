import BarraLateral from "./components/BarraLateral";
import BuscadorMain from "./components/BuscadorMain";
import Header from "./components/Header";
import Bandeja_Entrada from "./components/Bandeja_Entrada/Bandeja_Entrada";
import Reportar_Problema from "./components/Reportar_Problema";
import Singup from "./components/Signup/Singup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MiPerfil from "./components/MiPerfil";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Producto_Form from "./components/form/Producto_Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={
            <div>
              <Header navSet="ON" />
              <Singup />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div>
              <Header navSet="ON" />
              <Login />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div>
              <Header navSet="ON" />
              <div className="flex_container_sidebar_and_content">
                <BarraLateral />
                <BuscadorMain />
              </div>
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div>
              <Header navSet="ON" />
              <div className="flex_container_sidebar_and_content">
                <BarraLateral />
                <MiPerfil />
              </div>
            </div>
          }
        />
        <Route
          path="/report"
          element={
            <div>
              <Header navSet="ON" />
              <div className="flex_container_sidebar_and_content">
                <BarraLateral />
                <Reportar_Problema />
              </div>
            </div>
          }
        />
        <Route
          path="/bandeja-de-entrada"
          element={
            <div>
              <Header navSet="ON" />
              <div className="flex_container_sidebar_and_content">
                <BarraLateral />
                <Bandeja_Entrada />
              </div>
            </div>
          }
        />
      </Routes>
      <Producto_Form />
    </Router>
  );
}

export default App;
