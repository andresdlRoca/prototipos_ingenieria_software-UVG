import "./index.css";
import Header from "./components/Header";
import BarraLateral from "./components/BarraLateral";
import Reportar_Problema from "./components/Reportar_Problema";

export default function App() {
  return (
    <div className="container">
      <Header navSet="ON" />
      <div className="flex_container_sidebar_and_content">
        <BarraLateral />
        <Reportar_Problema />
      </div>
    </div>
  );
}
