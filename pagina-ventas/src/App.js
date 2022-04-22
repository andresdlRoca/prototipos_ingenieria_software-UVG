import BarraLateral from "./components/BarraLateral";
import Cards_Ventas from "./components/Cards_Ventas";
import Header from "./components/Header";
import Formulario_Ventas from "./components/Formulario_Ventas";
import React, {useState} from "react";

function App() {
  const [buttonForm, setButtonForm] = useState(false);
  const [nombre, setNombre]=useState("Servicio/Producto");
  const cambiarNombre=(e)=>{
    const value=e.target.value;
    setNombre(value);
  }
  return (
    <div className="container">
      <Header navSet="ON"/>{/** navSet = "ON" para mostrar opcinones en la barra de navegacion; OFF para no mostroarla */}
      <div className="flex_container_sidebar_and_content">
        <BarraLateral />
        <Cards_Ventas /> 
        <Formulario_Ventas trigger={false}>
          <h3 id="nombre-form">Formulario de venta</h3><br />
          <p>Formulario de la venta a publicar</p><br />
          <label>Nombre del producto o servicio: </label><br />
          <input id="nombre-prod" name="nombre-prod" value={nombre} ></input> 
          <br /><br />
          <label>Descripcion del producto o servicio: </label><br />
          <input id="desc-prod" name="desc-prod" value="Añade descripcion del producto o servicio"></input>
          <br /><br />
          <label>Categoria: </label><br />         
          <input id="categoria-prod" name="categoria-prod" value="Ingresa una categoria"></input>
          <br /><br />
          <label>Archivos multimedia: </label><br />         
          <input id="archivos-prod" name="archivos-prod" value="Adjunta archivos, i.e imagenes"></input>
          <br /><br />
          <label>Valor (GTQ): </label><br />         
          <input id="valor-prod" name="valor-prod" value="Valor del producto o servicio (en GTQ)"></input>
        </Formulario_Ventas>
      </div>
  
    </div>
  );
}
export default App;

/** onChange={cambiarNombre} */
