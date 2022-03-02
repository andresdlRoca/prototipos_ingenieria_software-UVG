import BarraLateral from "./components/BarraLateral";
import Header from "./components/Header";
import MiPerfil from "./components/MiPerfil";

function App() {
  return (
    <div className="container">
      <Header navSet="ON"/>
      <div className="flex_container_sidebar_and_content">
        <BarraLateral />
        <MiPerfil />
      </div>
  
    </div>
  );
}
export default App;
