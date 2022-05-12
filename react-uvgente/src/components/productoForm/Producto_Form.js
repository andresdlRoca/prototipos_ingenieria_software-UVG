//<div></div>
import React, { useState } from "react";

const Producto_Form = (props) => {
  const [data, setData] = useState({});

  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(!visible);
  };

  return (
    <div className="productoForm">
      <form>
        <label htmlFor="nombre_del_producto">Nombre del producto:</label>
        <input
          type="text"
          id="nombre_del_producto"
          name="nombre_del_producto"
          minLength="5"
          maxLength="20"
          placeholder="Agregue un nombre"
          required
        />
        <label htmlFor="descripcion_del_producto">
          Descripcion del producto:
        </label>
        <input
          type="text"
          id="descripcion_del_producto"
          name="descripcion_del_producto"
          minLength="10"
          maxLength="50"
          placeholder="Agregue una descripcion"
          required
        />
        <label htmlFor="precio_del_producto">Precio: (en quetzales)</label>
        <input
          type="number"
          name="name"
          id="precio_del_producto"
          min="0.01"
          max="9999.99"
          step="0.01"
          placeholder="100.00"
          required
        />
        <label htmlFor="nombre_del_producto">Foto del producto:</label>
        <input
          type="file"
          required
          accept="image/png, image/jpeg"
          className="custom-file-input"
        />
        <div className="botonesForm">
          <input
            type="button"
            value="Cancelar"
            className="botonCancelar"
            onClick={handleCancel}
          />
          <input
            type="submit"
            id="submitProductoForm"
            value="Siguiente"
            className="botonPublicar"
          />
        </div>
      </form>
    </div>
  );
};

Producto_Form.props = {};

export default Producto_Form;
