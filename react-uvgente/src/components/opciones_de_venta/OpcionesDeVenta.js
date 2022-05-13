import OpcionDeVenta from "./opcionDeVenta";
import { React, useState, useEffect } from "react";
import ProductoForm from "../productoForm/ProductoForm";

const OpcionesDeVenta = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <div className="opcionesDeVenta">
      <div className="innerOpcionesDeVenta">
        <OpcionDeVenta
          opcion="Producto"
          icono="FaBoxOpen"
          onClick={() => setVisible1(!visible1)}
        />
        <OpcionDeVenta
          opcion="Servicio"
          icono="FaChalkboardTeacher"
          onClick={() => setVisible2(!visible2)}
        />
      </div>
      {visible1 && <ProductoForm />}
      {visible1 ? <ProductoForm /> : null}
    </div>
  );
};

OpcionesDeVenta.props = {};

export default OpcionesDeVenta;
