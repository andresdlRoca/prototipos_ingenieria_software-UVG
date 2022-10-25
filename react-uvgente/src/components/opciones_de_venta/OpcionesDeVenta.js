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
        <div
          role="button"
          data-testid="Opcion1"
          onClick={() => setVisible1(!visible1)}
        >
          <OpcionDeVenta opcion="Producto" icono="FaBoxOpen" />
        </div>
        <div
          role="button"
          data-testid="Opcion2"
          onClick={() => setVisible2(!visible2)}
        >
          <OpcionDeVenta opcion="Servicio" icono="FaChalkboardTeacher" />
        </div>
      </div>
      {visible1 ? (
        <div
          role="button"
          onClick={() => setVisible1(!visible1)}
          data-testid="Opcion3"
        >
          <ProductoForm />
        </div>
      ) : null}
      {visible2 ? (
        <div
          role="button"
          onClick={() => setVisible2(!visible2)}
          data-testid="Opcion4"
        >
          <ServicioForm />
        </div>
      ) : null}
    </div>
  );
};

OpcionesDeVenta.props = {};

export default OpcionesDeVenta;
