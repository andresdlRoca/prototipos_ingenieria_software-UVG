import logo from "../media/UVGente_Logo_white.png";
import signo_mas_img from "../media/signo_mas_blanco.png";
import NavigationElements from "./NavigationElements";
import showProductForm from "./form/Producto_Form";

const Header = (props) => {
  console.log(props.navSet);
  if (props.navSet == "ON") {
    return (
      <header className="header">
        <img src={logo} alt="Logo UVGente" className="logo" />
        {/*Este componente es temporal, en lo que averiguo como pasar direccion de imagen como paramentro al cmpnente */}
        <NavigationElements title="Vender" navAction={showProductForm} />
        <NavigationElements title="Top Ventas" />
        <NavigationElements title="Top Servicios" />
        <NavigationElements title="Productos" />
        <NavigationElements title="Servicios" last_element="True" />
        <div></div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <img src={logo} alt="Logo UVGente" className="logo" />
      </header>
    );
  }
};
Header.defaultProps = {
  navSet: "ON",
};
export default Header;
