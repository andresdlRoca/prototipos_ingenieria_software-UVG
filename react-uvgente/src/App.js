import BarraLateral from "./components/BarraLateral";
import Header from "./components/Header";
//import MiPerfil from "./components/MiPerfil";
import Login from './components/Login';

function App() {
  return (
    <div className="container">
      <Header navSet="OFF"/>{/** navSet = "ON" para mostrar opcinones en la barra de navegacion; OFF para no mostroarla */}
      <div className="flex_container_sidebar_and_content">
        <Login />
      </div>
  
    </div>
  );
}
export default App;
