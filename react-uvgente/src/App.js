import BarraLateral from "./components/BarraLateral";
import BuscadorMain from "./components/BuscadorMain";
import Header from "./components/Header";
import Bandeja_Entrada from "./components/Bandeja_Entrada/Bandeja_Entrada";
import Ajustes from "./components/Ajustes/Ajustes";
import Reportar_Problema from "./components/Reportar_Problema";
import Singup from "./components/Signup/Singup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MiPerfil from "./components/MiPerfil";
import Login from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Ayuda from "./components/Ayuda/Ayuda";
import NavBar from "./components/new-nav-bar/NavBar";
import NewSideBar from "./components/new-side-bar/NewSideBar";
import NewVentas from "./components/Ventas/NewVentas";

function App() {
  return (
    <Router >
      <Routes >
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
                <BuscadorMain/>
                <NewSideBar/>
           
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div className="all-wrapper">
              <NavBar />
              <MiPerfil/>
              <NewSideBar/>

            </div>
          }
        />
        <Route
          path="/report"
          element={
            <div className="all-wrapper">
              <NavBar />
              <Reportar_Problema/>
              <NewSideBar/>

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
          path="/ajustes"
          element={
            <div className="all-wrapper">
            <NavBar />
            <Ajustes />
            <NewSideBar/>

          </div>
          }
          />
        <Route
          path="/ayuda"
          element={
            <div className="all-wrapper">
            <NavBar />
            <Ayuda/>
            <NewSideBar/>

          </div>
          }
          />
          <Route
          path="/top-ventas"
          element={
            <div className="all-wrapper">
              <NavBar />
              <div id="page-main-content">
                <NewVentas/>
              </div>
              <NewSideBar/>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
