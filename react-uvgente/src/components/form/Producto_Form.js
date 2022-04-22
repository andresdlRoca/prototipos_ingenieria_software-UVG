//<div></div>
import React, { useState } from "react";

const Producto_Form = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="productoForm">
      <form>
        <label>Nombre:</label>
        <input type="text" name="name" />
        <label>Descripcion del producto:</label>
        <input type="text" name="name" />
        <label>Precio:</label>
        <input type="text" name="name" />
        <label>Foto del producto:</label>
        <input type="button" value="Subir archivo" />
        <div className="botonesForm">
          <input type="button" value="Cancelar" className="botonCancelar" />
          <input type="submit" value="Siguiente" className="botonPublicar" />
        </div>
      </form>
    </div>
  );
};

Producto_Form.props = {};

export default Producto_Form;
