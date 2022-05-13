import "../../index.css";
import { FaChalkboardTeacher, FaBoxOpen } from "react-icons/fa";

const OpcionDeVenta = ({ opcion, icono, handleClick }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case "FaChalkboardTeacher":
        return <FaChalkboardTeacher size={70} color="#2e412e" />;
      case "FaBoxOpen":
        return <FaBoxOpen size={70} color="#2e412e" />;
      default:
        break;
    }
  };

  return (
    <button className="opcionDeVenta" onClick={handleClick}>
      <div>{getIcon(icono)}</div>
      <h3>{opcion}</h3>
    </button>
  );
};

OpcionDeVenta.props = {};

export default OpcionDeVenta;
