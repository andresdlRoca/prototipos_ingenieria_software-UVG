import BarraLateral from "./components/BarraLateral";
import BuscadorMain from "./components/BuscadorMain";
import Header from "./components/Header";
import Bandeja_Entrada from "./components/Bandeja_Entrada/Bandeja_Entrada";
import Ajustes from "./components/Ajustes/Ajustes";
import Reportar_Problema from "./components/Reportar_Problema";
import Singup from "./components/Signup/Singup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MiPerfil from "./components/MiPerfil";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Ayuda from "./components/Ayuda/Ayuda";
import NavBar from "./components/new-nav-bar/NavBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={
            <div>
              <NavBar />
              <Singup />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div>
              <NavBar />
              <Login />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div>
              <NavBar />
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
              <NavBar />
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
              <NavBar />
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
              <NavBar />
              <div className="flex_container_sidebar_and_content">
                <BarraLateral />
                <Bandeja_Entrada />
              </div>
            </div>
          }
        />
        <Route
          path="/ajustes"
          element={
            <div>
            <NavBar />
            <div className="flex_container_sidebar_and_content">
              <BarraLateral />
              <Ajustes />
            </div>
          </div>
          }
          />
        <Route
          path="/ayuda"
          element={
            <div>
            <NavBar />
            <div className="flex_container_sidebar_and_content">
              <BarraLateral />
              <Ayuda />
            </div>
          </div>
          }
          />
      </Routes>
    </Router>
  );
}

export default App;
