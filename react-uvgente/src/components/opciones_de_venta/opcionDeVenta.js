import "../../index.css";
import { FaChalkboardTeacher, FaBoxOpen } from "react-icons/fa";

const OpcionDeVenta = ({ opcion, icono }) => {
    const getIcon = (icon) => {
        switch (icon) {
            case "FaChalkboardTeacher":
                return <FaChalkboardTeacher size={70} color="white" />;
            case "FaBoxOpen":
                return <FaBoxOpen size={70} color="white" />;
            default:
                break;
        }
    };
    return (
        <div className="opcionDeVenta">
            {getIcon(icono)}
            <input type="button" className="productoOpcion" value={opcion} />
        </div>
    );
};

OpcionDeVenta.props = {};

export default OpcionDeVenta;