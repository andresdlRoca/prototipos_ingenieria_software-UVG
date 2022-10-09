import OpcionDeVenta from './opcionDeVenta';
import { React, useState, useEffect } from 'react';
import ProductoForm from '../productoForm/ProductoForm';
import ServicioForm from '../productoForm/ServicioForm';

const OpcionesDeVenta = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <div className="opcionesDeVenta">
      <div className="innerOpcionesDeVenta">
        <OpcionDeVenta
          opcion="Producto"
          icono="FaBoxOpen"
          data-testid="Opcion1"
          handleClick={() => setVisible1(!visible1)}
        />
        <OpcionDeVenta
          opcion="Servicio"
          icono="FaChalkboardTeacher"
          data-testid="Opcion2"
          handleClick={() => setVisible2(!visible2)}
        />
      </div>
      {visible1 ? (
        <ProductoForm handleClick={() => setVisible1(!visible1)} />
      ) : null}
      {visible2 ? (
        <ServicioForm handleClick={() => setVisible2(!visible2)} />
      ) : null}
    </div>
  );
};

OpcionesDeVenta.props = {};

export default OpcionesDeVenta;
