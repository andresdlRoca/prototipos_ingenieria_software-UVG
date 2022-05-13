import OpcionDeVenta from "./opcionDeVenta";

const OpcionesDeVenta = () => {
  return (
    <div className="opcionesDeVenta">
      <OpcionDeVenta opcion="Producto" icono="FaBoxOpen" />
      <OpcionDeVenta opcion="Servicio" icono="FaChalkboardTeacher" />
    </div>
  );
};

OpcionesDeVenta.props = {};

export default OpcionesDeVenta;
